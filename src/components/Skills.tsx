interface SkillsProps {
    imageUrl: string;
    title: string;
}

export function Skills(props: SkillsProps){
    return (
        <div className="flex flex-col gap-4 px-20 py-8 bg-purple-700 rounded-lg hover:bg-purple-400 transition-colors">
            <img src={props.imageUrl} alt="" />

            <span className="font-bold text-center">{props.title}</span>
        </div>
    )
}