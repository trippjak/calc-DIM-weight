<?php
if (!defined('ABSPATH')) {
    exit;
}

global $wpdb;
$table_name = $wpdb->prefix . 'dim_weight_settings';

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['update_settings'])) {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }
    
    check_admin_referer('dwc_update_settings');
    
    $carrier_id = intval($_POST['carrier_id']);
    $divisor = floatval($_POST['divisor']);
    
    $wpdb->update(
        $table_name,
        ['divisor' => $divisor],
        ['id' => $carrier_id]
    );
    
    echo '<div class="notice notice-success"><p>Settings updated successfully!</p></div>';
}

// Get current settings
$carriers = $wpdb->get_results("SELECT * FROM $table_name ORDER BY carrier_name");
?>

<div class="wrap">
    <h1>DIM Weight Calculator Settings</h1>
    
    <div class="card">
        <h2>Carrier Settings</h2>
        <table class="wp-list-table widefat fixed striped">
            <thead>
                <tr>
                    <th>Carrier</th>
                    <th>Service Level</th>
                    <th>Divisor</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($carriers as $carrier): ?>
                <tr>
                    <td><?php echo esc_html($carrier->carrier_name); ?></td>
                    <td><?php echo esc_html($carrier->service_level); ?></td>
                    <td><?php echo esc_html($carrier->divisor); ?></td>
                    <td>
                        <button type="button" class="button" 
                                onclick="editCarrier(<?php echo esc_attr($carrier->id); ?>)">
                            Edit
                        </button>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>

<div id="edit-carrier-modal" class="modal" style="display: none;">
    <div class="modal-content">
        <form method="post" action="">
            <?php wp_nonce_field('dwc_update_settings'); ?>
            <input type="hidden" name="carrier_id" id="edit-carrier-id">
            
            <h3>Edit Carrier Settings</h3>
            
            <p>
                <label>Divisor:</label>
                <input type="number" name="divisor" id="edit-carrier-divisor" 
                       step="0.01" required>
            </p>
            
            <p>
                <button type="submit" name="update_settings" class="button button-primary">
                    Update
                </button>
                <button type="button" class="button" onclick="closeModal()">
                    Cancel
                </button>
            </p>
        </form>
    </div>
</div>

<style>
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
}

.modal-content {
    background: #fff;
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    border-radius: 4px;
}
</style>

<script>
function editCarrier(id) {
    // Get carrier data and populate form
    document.getElementById('edit-carrier-id').value = id;
    document.getElementById('edit-carrier-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('edit-carrier-modal').style.display = 'none';
}
</script>