"use client";

import { useState, useEffect } from "react";
import Loader from "./Loader";
import { getAllVlogs } from "../action/vlogActions";
import VlogDisplay from "./VlogDisplay";

interface Vlog {
    id: string;
    vlogLink: string;
    caption: string | null;
    createdAt: Date;
}

interface Props {
    adminStatus: boolean;
}

const VlogsDisplay = ({adminStatus}: Props) => {
  const [vlogs, setVlogs] = useState<Vlog[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    const getVlogs = async () => {
        const allVlogs = await getAllVlogs()
        if (!allVlogs) return
        setVlogs(allVlogs)
    }
    getVlogs()
    setIsLoading(false)
  }, [])
  return (
<section className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-7 max-w-250 mx-auto my-5 px-3 py-5">
    {isLoading && <Loader />}
      {!isLoading && vlogs?.map((vlog) => (
        <VlogDisplay key={vlog.id} vlog={vlog} isAdmin={adminStatus}/>
      ))}
    </section>  )
}

export default VlogsDisplay