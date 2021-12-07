var authService = require('../controllers/manager/auth');

var managerCategoryController = require('../controllers/manager/category');
var managerClassController = require('../controllers/manager/class');
var managerClassTypeController = require('../controllers/manager/class_type');
var managerHolidayController = require('../controllers/manager/holiday');
var managerMealController = require('../controllers/manager/meal');
var managerConfigController = require('../controllers/manager/config');
var managerManagerController = require('../controllers/manager/manager');
var managerNewsController = require('../controllers/manager/news');
var managerOrderController = require('../controllers/manager/order');
var managerParentController = require('../controllers/manager/parent');
var managerProductController = require('../controllers/manager/product');
var managerReportController = require('../controllers/manager/report');
var managerSchoolController = require('../controllers/manager/school');
var managerStudentController = require('../controllers/manager/student');
var managerTransactionController = require('../controllers/manager/transaction');
var managerThirdPartyController = require('../controllers/manager/third');

const multipart = require('connect-multiparty');  
const multipartMiddlewareSchoolImg = multipart({ uploadDir:  './assets/uploads/img/schools' }); 
const multipartMiddlewareProductImg = multipart({ uploadDir:  './assets/uploads/img/products' }); 

function serverRoutes(app){

    //manager
    app.post('/manager/login', managerManagerController.login);
    app.post('/manager/changePwd', authService.verifyToken, managerManagerController.changePwd);
    app.get('/manager/logout', managerManagerController.logout);
    app.post('/manager/get_dashboard_info', authService.verifyToken, managerManagerController.getDashboardInfo);

    app.post('/manager/get_parents', authService.verifyToken, managerParentController.getParents);
    app.post('/manager/add_parent', authService.verifyToken, managerParentController.addParent);    
    app.post('/manager/edit_parent', authService.verifyToken, managerParentController.editParent);
    app.post('/manager/get_parent', authService.verifyToken, managerParentController.getParent);
    app.post('/manager/delete_parent', authService.verifyToken, managerParentController.delParent);

    app.post('/manager/get_order_history', authService.verifyToken, managerOrderController.getOrderHistory);
    app.post('/manager/get_orders_count', authService.verifyToken, managerOrderController.getOrdersCount);
    app.post('/manager/get_orders/:parentId', authService.verifyToken, managerOrderController.getOrders);
    app.post('/manager/get_order_detail', authService.verifyToken, managerOrderController.getOrderDetail);
    app.post('/manager/cancel_order', authService.verifyToken, managerOrderController.cancelOrder);

    app.post('/manager/get_students/:parentId', authService.verifyToken, managerStudentController.getStudents);
    app.post('/manager/get_students_count', authService.verifyToken, managerStudentController.getStudentsCount);

    app.post('/manager/get_txns', authService.verifyToken, managerTransactionController.getTxns);

    app.post('/manager/get_classes', authService.verifyToken, managerClassController.getClasses);
    app.post('/manager/add_class', authService.verifyToken, managerClassController.addClass);    
    app.post('/manager/edit_class', authService.verifyToken, managerClassController.editClass);
    app.delete('/manager/delete_class/:id', authService.verifyToken, managerClassController.delClass);
    app.get('/manager/get_class_list', authService.verifyToken, managerClassController.getClassList);

    app.post('/manager/get_class_types', authService.verifyToken, managerClassTypeController.getClassTypes);
    app.post('/manager/add_class_type', authService.verifyToken, managerClassTypeController.addClassType);    
    app.post('/manager/edit_class_type', authService.verifyToken, managerClassTypeController.editClassType);
    app.delete('/manager/delete_class_type/:id', authService.verifyToken, managerClassTypeController.delClassType);
    app.get('/manager/get_class_type_list', authService.verifyToken, managerClassTypeController.getClassTypeList);

    app.post('/manager/get_holidays', authService.verifyToken, managerHolidayController.getHolidays);
    app.post('/manager/add_holiday', authService.verifyToken, managerHolidayController.addHoliday);    
    app.post('/manager/edit_holiday', authService.verifyToken, managerHolidayController.editHoliday);
    app.delete('/manager/delete_holiday/:id', authService.verifyToken, managerHolidayController.delHoliday);

    app.post('/manager/get_meals', authService.verifyToken, managerMealController.getMeals);
    app.post('/manager/add_meal', authService.verifyToken, managerMealController.addMeal);    
    app.post('/manager/edit_meal', authService.verifyToken, managerMealController.editMeal);
    app.delete('/manager/delete_meal/:id', authService.verifyToken, managerMealController.delMeal);
    app.get('/manager/get_meal_list', authService.verifyToken, managerMealController.getMealList);

    app.post('/manager/get_categories', authService.verifyToken, managerCategoryController.getCategories);
    app.post('/manager/add_category', authService.verifyToken, managerCategoryController.addCategory);
    app.post('/manager/edit_category', authService.verifyToken, managerCategoryController.editCategory);
    app.delete('/manager/delete_category/:id', authService.verifyToken, managerCategoryController.delCategory);
    app.get('/manager/get_category_list', authService.verifyToken, managerCategoryController.getCategoryList);
    app.get('/manager/get_categories_cnt', authService.verifyToken, managerCategoryController.getCategoriesCnt);

    app.post('/manager/get_news', authService.verifyToken, managerNewsController.getNews);
    app.post('/manager/add_news', authService.verifyToken, managerNewsController.addNews);
    app.post('/manager/edit_news', authService.verifyToken, managerNewsController.editNews);
    app.delete('/manager/delete_news/:id', authService.verifyToken, managerNewsController.delNews);
    
    app.post('/manager/get_products', authService.verifyToken, managerProductController.getProducts);
    app.get('/manager/get_all_products', authService.verifyToken, managerProductController.getAllProducts);
    app.post('/manager/add_product', authService.verifyToken, managerProductController.addProduct);
    app.post('/manager/edit_product', authService.verifyToken, managerProductController.editProduct);
    app.post('/manager/update_product_option', authService.verifyToken, managerProductController.updateProductOption);
    app.delete('/manager/delete_product/:id', authService.verifyToken, managerProductController.delProduct);
    app.post('/manager/upload_product_img/:productId', authService.verifyToken, multipartMiddlewareProductImg, managerProductController.uploadProductImg);
    app.post('/manager/delete_product_img', authService.verifyToken, managerProductController.delProductImg);

    app.get('/manager/get_school_list', authService.verifyToken, managerSchoolController.getSchoolList);
    app.post('/manager/get_schools', authService.verifyToken, managerSchoolController.getSchools);
    app.post('/manager/edit_school', authService.verifyToken, managerSchoolController.editSchool);
    app.get('/manager/get_school_info', authService.verifyToken, managerSchoolController.getSchoolInfo);
    app.post('/manager/upload_school_logo', authService.verifyToken, multipartMiddlewareSchoolImg, managerSchoolController.uploadSchoolLogo);
    app.post('/manager/auth_stripe', authService.verifyToken, managerSchoolController.authStripe);

    app.post('/manager/send_email', authService.verifyToken, managerThirdPartyController.sendEmail);

    app.get('/manager/check_token_valid', authService.verifyToken, managerThirdPartyController.checkTokenValid);
    
}

module.exports = serverRoutes;
