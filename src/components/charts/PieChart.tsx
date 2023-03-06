import ReactApexChart from 'react-apexcharts'
import { Box, Typography, Stack } from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

const PieChart = ({ title, value, series, colors }: PieChartProps ) => {
  return (
    <Box 
      id="chart"
      display="flex"
      flex={1}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#fcfcfc"
      borderRadius="15px"
      pl={3.5}
      py={2.5}
      gap={2}
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>
      
      <ReactApexChart options={{
        chart: { type: 'donut'},
        colors: colors,
        legend: { show: false },
        dataLabels: { enabled: false },
      }} 
      series={series}
      type="donut"
      width="120px"
      />
    </Box>
  )
}

export default PieChart