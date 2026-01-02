import Image from "next/image";

const posts = [
    {
        id: 1,
        date: "14",
        month: "Februari 2022",
        img: "/img/blog/hopefully-dev-team.png",
        tags: "#AryaWiratama",
        title: "Foto Team DEV HOPEFULLY",
        desc: "Happy day because hopefully has touched more than 200 players and dared to continue to Remastered",
        link: "https://www.instagram.com/hopefully.roleplay/"
    },
    {
        id: 2,
        date: "12",
        month: "Mei 2020",
        img: "/img/blog/1.JPG",
        tags: "#AryaWiratama",
        title: "Foto Keluarga",
        desc: "Family Photo As Usual Every Year. Yes, that's our family culture. Every year there must be a family photo",
        link: "https://www.instagram.com/p/COxmGqCBEN1fn3biKSEm8Emdh6lntnovPC54dc0/"
    },
    {
        id: 3,
        date: "14",
        month: "Maret 2020",
        img: "/img/blog/2.jpg",
        tags: "#AryaWiratama",
        title: "Foto Keluarga",
        desc: "Family Photo As Usual Every Year. Yes, that's our family culture. Every year there must be a family photo",
        link: "https://www.instagram.com/p/B9t46__p6dj/?utm_source=ig_web_button_share_sheet"
    }
];

export default function BlogSection() {
    return (
        <div className="w-full min-h-screen container mx-auto px-4 sm:px-8 py-20">
            <div className="mb-12 border-b border-white/10 pb-8">
                <h5 className="text-[#FAC921] uppercase tracking-[4px] font-semibold text-sm mb-2">Blog</h5>
                <h3 className="text-4xl md:text-5xl font-heading font-bold">Blog</h3>
            </div>

            <div className="grid grid-cols-1 gap-12 max-w-4xl">
                {posts.map(post => (
                    <div key={post.id} className="group relative flex flex-col md:flex-row gap-8 items-start">
                        <div className="relative w-full md:w-1/3 aspect-video md:aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src={post.img}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-[#12141C] text-center p-2 rounded shadow-lg">
                                <span className="block text-xl font-bold font-heading">{post.date}</span>
                                <span className="block text-[10px] uppercase tracking-wider text-gray-400">{post.month}</span>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <span className="text-[#FAC921] text-xs font-bold tracking-widest uppercase mb-2 block">{post.tags}</span>
                            <h4 className="text-2xl font-heading font-bold mb-4 group-hover:text-[#FAC921] transition-colors">{post.title}</h4>
                            <p className="text-gray-400 leading-relaxed mb-6">{post.desc}</p>
                            <a href={post.link} target="_blank" className="text-sm border-b border-[#FAC921] pb-1 hover:text-[#FAC921] transition-colors">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
