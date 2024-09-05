import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
	return (
		<div className='w-full bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center py-10 gap-4'>
				<Image className="w-[220px]" src={"/chat-logo.webp"} alt='Hero' width={220} height={200} />
				<p className='text-3xl font-extralight'>Are you bored?</p>
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground'>
					Make calls, share your screen and hangout with your friends and family members
				</p>

				<Button className='rounded-full bg-green-primary hover:bg-green-secondary'>
					Use Let's Chat Now
				</Button>
			</div>
			<p className='pb-10 text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1'>
				<Lock size={10} /> Your personal messages are end-to-end encrypted
			</p>
		</div>
	);
};
export default ChatPlaceHolder;
