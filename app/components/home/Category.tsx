"use client";

const Category = () => {
    const CategoryList = [
        {
            name: "Çimento",
        },
        {
            name: "Kum",
        },
        {
            name: "Demir",
        },
        {
            name: "Boya",
        },
        {
            name: "İşçilik",
        },
    ];
    return (
        <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
            {CategoryList.map((category, index) => (
                <div className="border text-slate-600 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer flex-1 px-4 py-2 text-center" key={index}>{category.name}</div>
            ))}
        </div> 
    );
};

export default Category;
