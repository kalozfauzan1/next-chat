import Head from 'next/head';
import Image from 'next/image';

import styles from '@/styles/Home.module.scss';
import { useAuth } from '@/libs/auth';
import SocketIOClient from 'socket.io-client';
import { useEffect, useState } from 'react';
import { UsersApi } from '@/services';
import { useUser } from '@/queries';

function useSocket(url: string) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = SocketIOClient(url);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
}

export default function Home() {
  const [connected, setConnected] = useState<boolean>(false);
  const { user } = useUser({ redirectTo: `/login` });

  // const socket = useSocket('https://chat-service-kaloz.herokuapp.com')

  // useEffect(() => {
  //   function handleEvent(payload: any) {
  //     console.log(payload)
  //     // HelloWorld
  //   }
  //   if (socket) {
  //     // @ts-ignore
  //     socket.on('chat', handleEvent)
  //     // @ts-ignore
  //     socket.emit('chat', {
  //       message:'a',
  //       sender:'a',
  //       recipient:'a',
  //       time:'a'
  //     })
  //   }
  // }, [socket])

  if (!user) return <div />;
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="http://fonts.cdnfonts.com/css/sf-pro-display"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.searchBar}>
          <Image src="/icons/search.svg" width={14} height={14} />
          <input
            type="text"
            placeholder="search"
            className={styles.inputSearch}
          />
        </div>
        <div className={styles.rightInfo}>
          <div className={styles.actionInfo}>
            <Image src="/icons/phone.svg" width={14} height={14} />
            <Image src="/icons/vc.svg" width={14} height={14} />
          </div>
          <div className={styles.line} />
          <div className={styles.containerSettings}>
            <p className={styles.txtAvatar}>{user.name}</p>
            <Image
              src={user.photoUrl}
              className={styles.avatarImage}
              width={28}
              height={28}
            />
            <Image src="/icons/settings.svg" width={14} height={14} />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.chatBox}>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
          <div className={styles.listChat}>
            <Image src="/icons/avatar_chat.svg" width={50} height={50} />
            <div className={styles.chatTitle}>
              <p className={styles.chatTitleText}>Kaloz Fauzan</p>
              <p className={styles.chatTitleSubText}>
                Amet minim mollit non deserunt ulla...
              </p>
            </div>
            <p className={styles.chatTime}>10:10</p>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.listMessage}>
            <div className={`${styles.containerMessage} ${styles.start}`}>
              <div className={styles.messageText}>
                <p>kaloz fauzan</p>
              </div>
            </div>
            <div className={`${styles.containerMessage} ${styles.end}`}>
              <div className={styles.messageTextEnd}>
                <p>kaloz fauzan</p>
              </div>
            </div>
          </div>
          <div className={styles.messageBox}>
            <div className={styles.containerEmoticon}>
              <div className={styles.emoticon}>
                <Image src="/icons/emoticon.svg" width={24} height={24} />
              </div>
            </div>
            <div className={styles.inputMessageBox}>
              <input
                type="text"
                placeholder="Type Something..."
                className={styles.inputMessage}
              />
            </div>
          </div>
        </div>
        <div className={styles.profileBox}>
          <div className={styles.avatarBigImage}>
            <Image
              src={user.photoUrl}
              className={styles.avatarBigImage}
              width={100}
              height={100}
            />
          </div>
          <p className={styles.titleProfile}>Kaloz Fauzan</p>
          <p className={styles.number}>Kaloz Fauzan</p>
        </div>
      </main>
    </div>
  );
}
