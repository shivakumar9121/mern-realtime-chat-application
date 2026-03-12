import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();

	const fromMe = message.senderId?.toString() === authUser._id?.toString();

	console.log("authUser._id =", authUser._id);
	console.log("message.senderId =", message.senderId);
	console.log("fromMe =", fromMe);

	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-700";
	const formattedTime = extractTime(message.createdAt);
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
				{message.message}
			</div>

			<div className='chat-footer opacity-50 text-xs mt-1'>
				{formattedTime}
			</div>
		</div>
	);
};

export default Message;