import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import Loading from './Loading';

const ipInfoApiKey = '3f7e3e940663e5';

const GeoChart = () => {
    const [ipInfo, setInfo] = useState('');
    const [loading, setLoading] = useState(true);
    const [zoomLevel, setZoomLevel] = useState(2); // Initialize zoom level

    useEffect(() => {
        fetch(`http://ipinfo.io?token=${ipInfoApiKey}`)
            .then(res => res.json())
            .then(data => setInfo(data));
        setLoading(false);
    }, []);

    const handleChartSelect = ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();
        if (selection.length === 0) return;
        const region = data[selection[0].row + 10];
        console.log("Selected: " + region);

        // Calculate and set a new zoom level based on the selected region
        // You might need to adjust the zoom calculation according to your use case
        const newZoomLevel = calculateZoomLevel(region);
        setZoomLevel(newZoomLevel);
    };

    const calculateZoomLevel = (region) => {
        // Implement your logic to calculate zoom level here
        // You might want to use data about the region's geographical scope
        // to determine an appropriate zoom level
        return 7; // Replace with your calculated zoom level
    };

    const data = [
        ["Country", "Popularity"],
        [ipInfo.country, 900],
    ];

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
                <div className='relative'>
                    <Chart
                        chartEvents={[
                            {
                                eventName: "select",
                                callback: handleChartSelect,
                            },
                        ]}
                        chartType="GeoChart"
                        width="100%"
                        height="500px"
                        options={{ region: ipInfo.country, displayMode: "regions", resolution: "countries", zoomLevel: zoomLevel }}
                        data={data}
                    />
                    <div className='absolute top-10 left-5'>
                        <div className='flex flex-col text-black text-xl font-bold'>
                            <span>ip: {ipInfo.ip}</span>
                            <span>country: {ipInfo.country}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GeoChart;
