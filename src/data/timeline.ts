export type TimelineEntry = {
    date: string;
    text: string;
};

export const homeTimeline: TimelineEntry[] = [
    { date: "2022", text: "Started coding journey" },
    { date: "2024", text: "Attending Rose-Hulman" },
    { date: "2025", text: "Joined Purrquinox" },
    { date: "2026", text: "Joined Raytheon" },
];

export type AboutTimelineEntry = {
    year: string;
    event: string;
};

export const aboutTimeline: AboutTimelineEntry[] = [
    { year: "2022", event: "The Spark" },
    { year: "2024", event: "Rose-Hulman" },
    { year: "2025", event: "Joined Purrquinox" },
    { year: "2026", event: "Joined Raytheon" },
];
