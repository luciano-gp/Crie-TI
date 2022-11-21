import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { theme } from '../styles/theme';

import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Dashboard() {
    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: "datetime" as "datetime",
            axisBorder: {
                color: theme.colors.gray[600],
            },
            axisTicks: {
                color: theme.colors.gray[600],
            },
            categories: [
                "2022-10-15T00:00:00Z",
                "2022-10-16T00:00:00Z",
                "2022-10-17T00:00:00Z",
                "2022-10-18T00:00:00Z",
                "2022-10-19T00:00:00Z",
                "2022-10-20T00:00:00Z",
                "2022-10-21T00:00:00Z",
            ],
        },
        fill: {
            opacity: 0.3,
            type: "gradient",
            gradient: {
                shade: "dark",
                opacityFrom: 0.7,
                opacityTo: 0.3,
            }
        }
    };
    const seriesUsers = [{
        name: 'series1',
        data: [20, 35, 22, 30, 50, 43, 33]
    }];
    const seriesLikes = [{
        name: 'series1',
        data: [218, 415, 522, 180, 350, 294, 287]
    }];

    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, Pagination, Scrollbar, A11y]} pagination={{ clickable: true    }} initialSlide={0}>
                    <SwiperSlide>
                        <SimpleGrid flex="1" gap="4" minChildWidth={320}>
                            <Box p={["6", "8"]} bg="gray.800" pb="4" borderRadius={8}>
                                <Text>New members</Text>
                                <Chart type="area" height={160} options={options} series={seriesUsers} />
                            </Box>
                            <Box p={["6", "8"]} bg="gray.800" pb="4" borderRadius={8}>
                                <Text>New likes</Text>
                                <Chart type="area" height={160} options={options} series={seriesLikes} />
                            </Box>
                        </SimpleGrid>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SimpleGrid flex="1" gap="4" minChildWidth={320}>
                            <Box p={["6", "8"]} bg="gray.800" pb="4" borderRadius={8}>
                                <Text>New members</Text>
                                <Chart type="area" height={160} options={options} series={seriesUsers} />
                            </Box>
                            <Box p={["6", "8"]} bg="gray.800" pb="4" borderRadius={8}>
                                <Text>New likes</Text>
                                <Chart type="area" height={160} options={options} series={seriesLikes} />
                            </Box>
                        </SimpleGrid>
                    </SwiperSlide>
                </Swiper>

            </Flex>
        </Flex>
    )
}