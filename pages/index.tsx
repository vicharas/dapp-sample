import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import RegisterETHSend from "../components/RegisterETHSend";
import useEagerConnect from "../hooks/useEagerConnect";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>OrangeDeFi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/"><div className="logo">
            <div>
              <img src="orange-logo.svg" /></div><div className="logo-text"><a>OrangeDeFi</a></div>
            </div>
          </Link>
          <div className="account-info">
            <ETHBalance />
            <Account triedToEagerConnect={triedToEagerConnect} />
          </div>
        </nav>
      </header>

      <main>
        {isConnected && (
          <>
          <h1>
            Future Transaction
          </h1>
          <section>
            <RegisterETHSend />
          </section>
          </>
        )}
        {!isConnected && (
            <p>Ready to pulp your financial stress and zest up your assets?</p>
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
