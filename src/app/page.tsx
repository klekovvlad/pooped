"use client"

import {MainDataType} from "@/app/definitions/api";
import css from './styles.module.scss'
import {useEffect, useState} from "react";

export default function Home() {
  const [data, setData] = useState<MainDataType | null>(null);

  useEffect(() => {
    const data = getData()
    data.then((res) => {
      if(res) {
        setData(res)
      }
    })
  }, [])

  const handleClick = async () => {
    const res = await decrementData()
    if(res) {
      setData(res)
    }
  }

  if(!data) return null

  return (
    <main>
      <h1>Имя: {data.name}</h1>
      <p>Количество какашек: {data.counter}</p>
      <button className={css.button} onClick={handleClick}>Пук</button>
    </main>
  );
}

async function getData(): Promise<MainDataType | undefined> {
  const res = await fetch('/api/data', {
    cache: 'no-store'
  });

  if(!res.ok) return;

  return res.json()
}

async function decrementData(): Promise<MainDataType | undefined> {
  const res = await fetch('/api/data', {
    cache: 'no-store',
    method: 'POST',
  });

  if(!res.ok) return;

  return res.json()
}