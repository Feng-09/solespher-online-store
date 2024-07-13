export async function getStaticProps() {
    const response = await fetch('https://api.timbu.cloud/products?organization_id=c7ab58dd60ac44b58fdaaba775b4e3f7&reverse_sort=false&Appid=XQQYQ1CDHQ0RBBZ&Apikey=6f96b3ce51794908bdb767033000c31d20240712161809995865')
    const data = await response.json()

    return {
        props: {
            itemData: data,
        }
    }
}

export default function ExploreButton({ itemData }: any) {
    return (
        <div
        className="bg-[#141718] rounded-[2.248125rem] w-fit py-4 px-10 text-white font-aeonik font-bold text-[1.25rem] text-center leading-[1.4375rem] hover:cursor-pointer hover:bg-white hover:text-black duration-300 hover:w-[14rem] text-nowrap"
        >Explore Now</div>
    )
}