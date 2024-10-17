// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "controllers/application"
import ChatRefreshController from "./chat_refresh_controller"
application.register("chat_refresh", ChatRefreshController)