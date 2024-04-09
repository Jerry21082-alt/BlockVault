import Chart from 'react-apexcharts';
import { data } from '@/constants/apexChart';
import { useEffect } from 'react';
// import { fetchCoinOhlc } from '@/utils/data';

export default function ExchangeChart() {

  // useEffect(() => {
  //   const fetchData = async () => { 
  //     const response = await fetchCoinOhlc('bitcoin', 1)
  //     console.log(response);
  //   }

  //   fetchData()
  // }, []);

  return (
    <div className='mt-10'>
      <Chart
        type="candlestick"
        // height={500}
        options={data.options}
        series={data.series}
      />
    </div>
  )
}
