'use client'

interface ServiceSectionProps {
  title: string
  description: string
  imgUrl: string
  invert?: boolean
}

export default function ServiceSection(props: ServiceSectionProps) {
  return (
    <div className="flex-center relative">
      <div className="flex-center absolute z-20 flex-col gap-3 p-10 text-center">
        <h2 className="text-4xl font-bold text-mainPalette-textAlt">
          {props.title}
        </h2>
        <div className="flex-center gap-4 text-lg text-mainPalette-textLowlight">
          <p className="md:max-w-[60%]">{props.description}</p>
        </div>
      </div>
    </div>
  )
}
