const VALID_USERNAME = 'admin';
const VALID_PASSWORD = '123456';

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({
      success: false,
      message: '用户名或密码错误'
    });
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return res.json({
      success: true,
      message: '欢迎回来，管理员'
    });
  }

  return res.json({
    success: false,
    message: '用户名或密码错误'
  });
};

module.exports = { login };