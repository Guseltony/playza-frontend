export type LeaderboardItem = {
  type: "player";
  rank: number;
  name: string;
  avatar?: string; // optional for out-of-zone
  points: number;
  prize: number;
  highlight?: "gold" | "silver" | "bronze" | "me";
};

export const rankTitle = [
  { type: "divider", label: "Leaders" },
  { type: "divider", label: "Runner Ups" },
  { type: "cutoff", label: "Winning Zone Cutoff" },
];

export const LEADERBOARD_DATA: LeaderboardItem[] = [
  {
    type: "player",
    rank: 1,
    name: "ShadowNinja",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCH8URigXDLYUtE0iM3QXg_jTaWo5D4rzN_4DbgTYYEsWz8FdBdbgd45Elc6abWH5oUSJkDoX0kYDMw_QuUdRxNE8NNT31GOyAbU2R79Mp8BCkMGj5dfZPamAxHnACunTjIP9B3qj0-46x4345Ih_ZvenTnmkmKKvr2Ykuql5LoNNNV7QRTIgNj4BZshGU6tPJqbBhjDqdwwlI5GVr8hrrxEXPrusVxD-9mhxeeSPvxoG6P-CP9FiU5pZKiEs-BRy04X2yNMxpla4c",
    points: 84290,
    prize: 250,
    highlight: "gold",
  },
  {
    type: "player",
    rank: 2,
    name: "FruitMaster_99",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuIVR8ZDWsBDnySj1myKojWV2BX7N0r8LPJdW26LLfnnvRSheVHjBf-QKVo9HBLub9WReKuDH1KPVDBDmB13BKv4VQxt9nh1t6uaor8PLQdyLeiO6AHFzepF8TdAU4SPOfxmwFlJ43Ay2hI4NXkmT8A6qB7kkLQ7J88ZK1CGlodbkdOmPGaGb4xpYZjy8tnJwOuA8CRfWsIPkyf9cvLjHPjYohlY7Hu9WmzIYUB9WjDyXcRldH-8g_sVfBHHCDd12RQceIfUSJ1qQ",
    points: 82150,
    prize: 150,
    highlight: "silver",
  },
  {
    type: "player",
    rank: 3,
    name: "KatanaZero",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLvR_xVyTXXGYpkjDvoZK-1TVeNtVhch_hwpS6Hgt9TbMeFCOOIYUy6efnY5wyFZ5yDHT0KtQGr_hgkjLoX6jPh-Osp9LW151VtZbXS2fsMapT5W64brLqyR-nxOp4Lmzz1eKNLIp0_U5JORXV8k3eVGKoHlvrkypszkmajE_THnxE3iBJHBAYj0kj1IReokKkoTbr8sN4iKg5jQaBFKz8-z9CCZKz9Q6o_uK5JzDYaCj708D0M_nQwBmWwhsF2sbT7KrHDg_Msq8",
    points: 79800,
    prize: 100,
    highlight: "bronze",
  },

  {
    type: "player",
    rank: 4,
    name: "QuickSlicer",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhh7qMshLgrdzO96hWqwQhduita48YCj4WZGokhy2oq3HH2GJTuW5MZJKjpCT6JrTcazua-Nt6ph0jchYUiwclgYhCZt04NjhHjMNJC5Xh3iVnAechj2UdqaKawZl4x8qh5oAfPO4_VodhbmQPWGqptZ01-IiKbzV-aERa7dYIIZhxvSjVCA3E_zZPskYtDwuuPfsXXhyU5CgFxky0Djq8Oxic2wio5KSwecWRQLJfUKNZ-DQM1dNdo7DhzO8mmPdiBMI3EgubK38",
    points: 75400,
    prize: 75,
  },
  {
    type: "player",
    rank: 5,
    name: "MelonManiac",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADyj9PtXeDdwBrWPZACK1uRQeox4MR0IY1BSJp-KDf3XebFDXiCt2OL7LokkSiiKrMUh-0j6ebEwOo58FTP87ysI7HiJQ53woZIE7ZE8OM79mEEilFUl-L3goLB2f3Uhqr46k1S3-QCpp-woBCP6MMgeFprDVDmHYlCILEsJdQGXAmzIKPibz9YaHtzjw49754Muj6NjSIC6UlCDJdalu6cvJJVHaHXD4yOV2gVUPmlUCCvu0nfJ4KtZlg6xzE8LlGtrH5x3mFbTA",
    points: 72100,
    prize: 60,
  },
  {
    type: "player",
    rank: 6,
    name: "SliceAndDice",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB8H1Kk-jiLEE2W5LrUQ2byYY5TxI1E-SgR2gFSSsZD0QimJfjCZcZgmUSG7sVedJ5fU9RTgN44EBP7Dja-BY6m4gQ0FStr1RG3P-mIicx985CX8iTfGQT2n656VcRNDJHnvaQjmSph4bJg67mdKMwjHuhhcTBmHQv7yPJLoH9CDWGNl4spglyguIJPxVfkutHGkFnpKrFSxy7VWnL3ZaIZleM33G9aP5Rw6WDc9oklhNFFOHbHwZSpXoZyODX5NbY-vImcEVgkIjk",
    points: 70050,
    prize: 50,
  },
  {
    type: "player",
    rank: 7,
    name: "You (Alex)",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgLtlnzpFpSf365hllO9njnNDCiBiMLrfejhFDePg_s0nOeBsGvzr81ZA8yFLLYDdHdDLbFin6rH2VSt0B71Fna1xyzEgvK4VqWMNnUB2ovR60ff2TwQvrqmGIuzt67uRoyhokzOxKqdRkvDEGWAU3_OuvpJ51Z4jxgGEH6Qvcd2qS4zc_WMJfBM7JzHsTC20U7TkVFQJBuFdJagbfIU7-wUih13l0k1ls8XQWHNx6Eiac-bCPUQgw-dnbvIKf3nQEHSvIB_T8hXo",
    points: 68920,
    prize: 45,
    highlight: "me",
  },
  {
    type: "player",
    rank: 8,
    name: "BladeRunner",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dZ2UvvYEEUJm4oCIJtjismZGpGa5Bds5luFfMiWu-BMl6-celgrbRDZWoG__QcsM0WS-JNBLXI_PR2WbYElRQiALLpQg1pMu0bE2WhCCfta4h3pyX3oWI_H6pTPpoGH_RI0E6dpB26KzWLyTNtaxjlq-JT0Mww93CwxgFxhiILUV8uaZa-lQ8T52__APFoh1CPPU_Xv0xlzUmGHZckgKCbzW3ZIhfTzZWvzFd1ZbQvQ3FOJHqVZlVKVr5PyK5oMETe-M0KFBFTQ",
    points: 65200,
    prize: 30,
  },

  {
    type: "player",
    rank: 9,
    name: "SlowSlicer",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 10,
    name: "DragonWarrior",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 11,
    name: "WolferineKing",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 12,
    name: "TotiGamer",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 13,
    name: "DangerPlayer",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 14,
    name: "CubWinner",
    points: 54100,
    prize: 0,
  },
  {
    type: "player",
    rank: 15,
    name: "KingLove",
    points: 54100,
    prize: 0,
  },
];
