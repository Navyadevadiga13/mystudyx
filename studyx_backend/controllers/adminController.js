const Admin=require("../models/Admin");
const jwt=require("jsonwebtoken");
//register admin
exports.register_admin = async (req, res) => {
  try {
    const { admin_name, admin_password } = req.body;
    if (!admin_name || !admin_password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password'
      });
    }
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ admin_name });
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: 'Admin with this username already exists'
      });
    }
    // Create new admin (password will be hashed automatically)
    const admin = await Admin.create({
      admin_name,
      admin_password
    });

    res.status(201).json({
      success: true,
      message: 'Admin registered successfully',
      data: {
        admin_id: admin._id,
        admin_name: admin.admin_name,
        createdAt: admin.createdAt
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering admin',
      error: error.message
    });
  }
};


// Login Admin
exports.login_admin = async (req, res) => {
  try {
    const { admin_name, admin_password } = req.body;

    // Validate input
    if (!admin_name || !admin_password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide username and password'
      });
    }

    // Find admin by name
    const admin = await Admin.findOne({ admin_name });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }

    // Compare password
    const isPasswordMatch = await admin.comparePassword(admin_password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: admin._id, 
        admin_name: admin.admin_name 
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        admin_id: admin._id,
        admin_name: admin.admin_name,
        createdAt: admin.createdAt
      },
      token: token
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
};