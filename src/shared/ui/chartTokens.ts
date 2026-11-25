export const chartTokens = {
    margin: {
        top: 16,
        right: 16,
        bottom: 48,
        left: 0,
    },
    tickSize: 11,
    labelAngle: -20,
    gridDash: "3 3",
    centerX: "50%",
    centerY: "45%",
    radius: "65%",
    colors: Array.from(
        { length: 7 },
        (_, index) => `var(--chart-${index + 1})`,
    ),
};