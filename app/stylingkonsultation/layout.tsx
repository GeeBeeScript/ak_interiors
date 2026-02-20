import OtherNav from "../[components]/OtherNav";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <OtherNav />
        {children}
    </div>
  )
}

export default layout