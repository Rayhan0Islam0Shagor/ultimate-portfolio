import MessengerCustomerChat from 'react-messenger-customer-chat';

const MessengerChat = () => {
  return (
    <MessengerCustomerChat
      pageId={`${process.env.NEXT_PUBLIC_PAGE_ID}`}
      appId={`${process.env.NEXT_PUBLIC_APP_ID}`}
    />
  );
};

export default MessengerChat;
