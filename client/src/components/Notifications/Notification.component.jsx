import { store } from 'react-notifications-component';

const Notifications = (action, type) => {

    console.log(type)

        let title
        let message

        switch(action){
            case "success-add":
                title='Task Added'
                message="Your new Task has been successfully added"
                break
            case "error-add":
                title = "Error"
                message="Failed to add Task"
                break
            case "success-remove":
                title="Task Removed"
                message="Your Task has been successfully removed"
                break
            case "error-remove":
                title="Error"
                message="Failed to remove task"
                break

            default:
                title=""
                message=""
        }
        store.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 2000,
              onScreen: true
            }
          })
}

export default Notifications