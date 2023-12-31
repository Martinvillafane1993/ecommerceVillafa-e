import { useState, createContext, useContext } from "react"

const Notification = ({ data }) => {
    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 30,
      backgroundColor: data.type === 'success' ? 'red' : '#6e1e51',
      color: 'white',
      padding: '10px 20px 10px 20px',
      fontSize: 20,
      fontFamily: 'Raleway',
      fontWeight: 500,
      paddingTop:50,
      lineHeight:1.5,
      height:250,
      width:250,
      textAlign:'center',
      borderRadius: 10
    }

    return (
      <div style={notificationStyle}>
        {data.text}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificationData, setNotificationData] = useState({
        type: 'success',
        text: ''
    })

    const setNotification = (type, text, time = 2) => {
        setNotificationData({ type, text })
        setTimeout(() => {
            setNotificationData(prev => { return { ...prev, text: ''} })
        }, (time * 1500))
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            {notificationData.text && <Notification data={notificationData}/> }
            {children}
        </NotificationContext.Provider>
    )
}


export const useNotification = () => {
    return useContext(NotificationContext)
}