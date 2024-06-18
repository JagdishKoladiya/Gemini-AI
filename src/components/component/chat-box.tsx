"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useChat } from "@ai-sdk/react";
export function ChatBox() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <div
        className="flex flex-col bg-white-100 dark:bg-gray-950 body-height"
        style={{ marginTop: "72px" }}
      >
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((iteam) => {
            return (
              <>
                <div
                  className={
                    iteam?.role === "user"
                      ? "items-start"
                      : "justify-end" + "flex  gap-4"
                  }
                >
                  <Avatar className="border w-8 h-8 dark:border-gray-800">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>OA</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray dark:bg-gray-900 rounded-lg p-4 max-w-[70%] text-sm shadow-md">
                    <p> {iteam.content}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-white dark:bg-gray-950 p-4 flex items-center gap-2">
            <Textarea
              placeholder="Type your message..."
              className="flex-1 resize-none rounded-lg px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
              value={input}
              onChange={handleInputChange}
            />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              type="submit"
            >
              <SendIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </form>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </svg>
    </>
  );
}
