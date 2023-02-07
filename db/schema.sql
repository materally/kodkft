-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: kodkft-db:3306
-- Létrehozás ideje: 2023. Feb 07. 10:10
-- Kiszolgáló verziója: 5.7.41
-- PHP verzió: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `test_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rates`
--

CREATE TABLE `rates` (
  `id` int(11) NOT NULL,
  `from_symbol` varchar(3) NOT NULL,
  `to_symbol` varchar(3) NOT NULL,
  `rate` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `rates`
--

INSERT INTO `rates` (`id`, `from_symbol`, `to_symbol`, `rate`) VALUES
(1, 'EUR', 'HUF', 330);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `symbols`
--

CREATE TABLE `symbols` (
  `id` int(11) NOT NULL,
  `symbol` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- A tábla adatainak kiíratása `symbols`
--

INSERT INTO `symbols` (`id`, `symbol`) VALUES
(1, 'EUR'),
(2, 'HUF'),
(3, 'USD'),
(4, 'CHF'),
(5, 'GBP'),
(6, 'CNY');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `rates`
--
ALTER TABLE `rates`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `symbols`
--
ALTER TABLE `symbols`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `rates`
--
ALTER TABLE `rates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `symbols`
--
ALTER TABLE `symbols`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
