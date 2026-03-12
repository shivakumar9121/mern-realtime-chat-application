import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-3 items-center hover:bg-sky-500 rounded p-2 py-2 cursor-pointer ${
					isSelected ? "bg-sky-500" : ""
				}`}
				onClick={() => setSelectedConversation(conversation)}
			>
				<div className='relative'>
					<div className='w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-lg uppercase'>
						{conversation.fullName?.charAt(0)}
					</div>

					{isOnline && (
						<span className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-slate-800 rounded-full'></span>
					)}
				</div>

				<div className='flex flex-col flex-1 min-w-0'>
					<p className='font-bold text-gray-200 truncate'>
						{conversation.fullName}
					</p>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};

export default Conversation;