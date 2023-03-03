import { Box, Well, Paragraph, SpinnerOG } from '@zoralabs/zord'
import ERC721DropContractProvider from '@providers/ERC721DropProvider'
import { NextPage } from 'next'
import { SubgraphERC721Drop } from 'models/subgraph'
import { MintStatus } from '@components/MintStatus'
import { MintDetails } from '@components/MintDetails'
import SeoHead from '@components/SeoHead'
import { ipfsImage } from '@lib/helpers'
import { border } from 'styles/styles.css'

interface HomePageProps {
  collection: SubgraphERC721Drop
  chainId?: number
}

const HomePage: NextPage<HomePageProps> = ({ collection, chainId }) => {
  return (
    <>
      <SeoHead />
      <div
        className="font-body flex grid grid-cols-6 p-5 justify-center align-center bg-[url('/images/background_1800.png')] "
        style={{ backgroundColor: '#f105cd' }}
      >
        <div className="order-1 flex col-span-6 md:col-span-3 justify-center">
          <img className="lg:max-w-lg" src="/images/Logo_new_festival_token.png" />
        </div>
        <div className="order-2 flex flex-col justify-end text-md text-white md:text-2xl col-span-6 md:col-span-3 gap-5 pb-5">
          <p>
            {process.env.NEXT_PUBLIC_TITLE}: {process.env.NEXT_PUBLIC_DESCRIPTION_TEXT}
          </p>
        </div>
        <div className="order-3 col-span-3 flex justify-center items-center"></div>
        <div className="order-4 flex flex-col justify-start text-white text-md md:text-2xl col-span-3">
          <p className="pb-5">
            cada ano, creamos un <span className="font-bold">festival</span> para apoyar
            nuestro musicos y nuestro eventos. Este ano, tenemos reproductores de musica
            con 10 musicos argentinos.
          </p>
        </div>
        <div className="order-6 grid justify-items-center text-white	text-center lg:order-5 text-2xl col-span-6 lg:col-span-3">
          <div className="flex flex-col gap-3">
            <p className="font-bold">Canciones del Reproductor</p>
            <p>musico - cancion #1</p>
            <p>musico - cancion #2</p>
            <p>musico - cancion #3</p>
            <p>musico - cancion #4</p>
            <p>musico - cancion #5</p>
            <p>musico - cancion #6</p>
            <p>musico - cancion #7</p>
            <p>musico - cancion #8</p>
            <p>musico - cancion #9</p>
            <p>musico - cancion #10</p>
          </div>
        </div>
        <div className="my-5 order-5 lg:order-6 flex flex-col justify-start text-xs md:text-lg col-span-6 lg:col-span-3">
          <ERC721DropContractProvider
            erc721DropAddress={process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}
            chainId={parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)}
          >
            <Well
              className="rounded-none border-black bg-white"
              p="x6"
              style={{ borderBottom: 0 }}
            >
              <iframe
                className="h-[500px] sm:h-[800px]"
                src="https://cdn.warpsound.ai/ipfs/QmVYW5vHaV322Kvp2So5ErngP1PrDUneYqo4e9TNygAGSn?playlist-url=https://nftstorage.link/ipfs/bafkreibnkekukmhik5st3z32ejeh2fu7ge56qe5v5h67gadmz7yby33gba"
                frameBorder="0"
              ></iframe>
            </Well>
            <Well className="rounded-none border-black bg-white" p="x6">
              <Box>
                {collection != null ? (
                  <>
                    <MintDetails collection={collection} showPresale={false} />
                    <MintStatus collection={collection} />
                  </>
                ) : (
                  <Paragraph align="center" mt="x8">
                    <SpinnerOG />
                  </Paragraph>
                )}
              </Box>
            </Well>
          </ERC721DropContractProvider>
        </div>
      </div>
    </>
  )
}

export default HomePage
