"use client";

import { useState } from "react";

interface LeaderboardEntry {
  rank: number;
  player: string;
  win: number;
  winRate: number;
  point: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, player: "Kadir Ali", win: 500, winRate: 99, point: 5268 },
  { rank: 2, player: "Habib 2351", win: 485, winRate: 90, point: 5268 },
  { rank: 3, player: "Jesmin555", win: 480, winRate: 88, point: 5268 },
  { rank: 4, player: "Fahim 2256", win: 475, winRate: 80, point: 5268 },
  { rank: 5, player: "Nadi266", win: 470, winRate: 99, point: 5268 },
  { rank: 6, player: "Forvej", win: 455, winRate: 99, point: 5268 },
  { rank: 7, player: "Fahim 2256", win: 475, winRate: 80, point: 5268 },
  { rank: 8, player: "Nadi266", win: 470, winRate: 99, point: 5268 },
  { rank: 9, player: "Forvej", win: 455, winRate: 99, point: 5268 },
  { rank: 10, player: "Forvej", win: 455, winRate: 99, point: 5268 },
];

const topThree = [
  { rank: 2, player: "Habib 2351", medal: "🥈", position: "2nd" },
  { rank: 1, player: "Kadir Ali", medal: "👑", position: "1st" },
  { rank: 3, player: "Jesmin555", medal: "🥉", position: "3rd" },
];

export default function LeaderboardSection() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="relative w-full min-h-[calc(100vh-75px)] px-4 py-12 md:px-8 lg:px-12">
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-60 top-12 left-12"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-40 top-32 right-20"></div>
      <div className="absolute w-2 h-2 bg-white rounded-full opacity-50 bottom-32 left-8"></div>
      <div className="absolute w-3 h-3 bg-white rounded-full opacity-40 bottom-20 right-12"></div>

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Leader Board
        </h1>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Provide liquidity to the house by purchasing $DON and
          <br />
          earning yield from the losses of the players.
        </p>
      </div>

      {/* Top 3 Players */}
      <div className="flex justify-center gap-4 md:gap-60 mb-8 flex-wrap my-10!">
        {topThree.map((player) => (
          <div key={player.rank} className={`flex flex-col items-center ${player.rank !== 1 ? "mt-20" : ""}`}>
            {/* Medal Icon */}
            <div className="text-4xl md:text-5xl mb-2">{player.medal}</div>

            {/* Avatar Circle */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-linear-to-br from-pink-300 to-purple-300 flex items-center justify-center mb-3 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl">👤</span>
            </div>

            {/* Player Info */}
            <div className="text-center">
              <p className="text-white font-bold text-lg">{player.player}</p>
              <p className="text-pink-100 text-sm font-semibold">
                {player.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Your Position */}
      <div className="text-center mb-12">
        <p className="text-white text-base md:text-lg">
          You won <span className="font-bold">#120th position</span>
        </p>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-linear-to-r from-black to-purple-900 rounded-full p-1 mb-2">
          <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 md:px-8 py-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="text-white font-bold text-center text-sm">
                Rank
              </div>
              <div className="text-white font-bold text-center text-sm">
                Player
              </div>
              <div className="text-white font-bold text-center text-sm">
                win
              </div>
              <div className="text-white font-bold text-center text-sm">
                win Rate
              </div>
              <div className="text-white font-bold text-center text-sm">
                Point
              </div>
            </div>
          </div>
        </div>

        {/* Table Rows */}
        <div className="space-y-2">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className="bg-linear-to-r from-pink-300 to-purple-300 rounded-full p-1"
            >
              <div className="bg-white/90 rounded-full px-6 md:px-8 py-4">
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div className="text-center">
                    {entry.rank <= 3 ? (
                      <span className="text-xl">
                        {entry.rank === 1
                          ? "👑"
                          : entry.rank === 2
                          ? "🥈"
                          : "🥉"}
                      </span>
                    ) : (
                      <span className="font-bold text-gray-800">
                        #{entry.rank}
                      </span>
                    )}
                  </div>
                  <div className="text-center font-semibold text-gray-800">
                    {entry.player}
                  </div>
                  <div className="text-center font-semibold text-gray-800">
                    {entry.win}
                  </div>
                  <div className="text-center font-semibold text-gray-800">
                    {entry.winRate}%
                  </div>
                  <div className="text-center font-semibold text-gray-800">
                    {entry.point}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
        <button className="text-white hover:text-pink-300 text-sm font-semibold">
          ← Previous
        </button>

        <div className="flex gap-2 mx-4">
          {[1, 2, 3, "...", 100].map((page) => (
            <button
              key={page}
              className={`
                px-3 py-2 rounded-full text-sm font-semibold transition-all
                ${
                  page === 1
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : page === "..."
                    ? "text-white hover:bg-transparent cursor-default"
                    : "text-white hover:bg-white/20"
                }
              `}
              disabled={page === "..."}
            >
              {page}
            </button>
          ))}
        </div>

        <button className="text-white hover:text-pink-300 text-sm font-semibold">
          Next →
        </button>
      </div>
    </div>
  );
}
