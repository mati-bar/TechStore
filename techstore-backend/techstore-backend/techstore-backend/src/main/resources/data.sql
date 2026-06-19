-- Datos iniciales de TechStore
-- Se cargan automáticamente al iniciar la aplicación
-- Al reiniciar IntelliJ, los datos vuelven a este estado original

-- ── Notebooks ────────────────────────────────────────────────
INSERT INTO producto (id, categoria, nombre, marca, precio, stock, imagen, procesador, ram_gb, almacenamiento_gb, pantalla_pulgadas, bateria_mah, camara_mp, tipo, wireless, cancelacion_ruido, pulgadas, resolucion, panel_tipo, hz, placa_video, fuente_w) VALUES
(1, 'notebook', 'MacBook Air M2', 'Apple', 2100000, 4, 'https://images.unsplash.com/photo-1611186871525-5a0c4f200c34?w=400', 'Apple M2', 16, 512, 13.6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'notebook', 'ASUS ROG Zephyrus G14', 'ASUS', 1950000, 3, 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400', 'AMD Ryzen 9 7940HS', 32, 1024, 14.0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'notebook', 'Dell XPS 13', 'Dell', 1800000, 5, 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400', 'Intel Core i7-1360P', 16, 512, 13.4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'notebook', 'HP Pavilion 15', 'HP', 920000, 6, 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400', 'AMD Ryzen 5 7530U', 16, 1024, 15.6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'notebook', 'Acer Aspire 5', 'Acer', 720000, 10, 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400', 'Intel Core i3-1215U', 8, 256, 15.6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

-- ── Celulares ─────────────────────────────────────────────────
(6,  'celular', 'iPhone 15', 'Apple', 1650000, 12, 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400', NULL, NULL, 128, 6.1, 3877, 48, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7,  'celular', 'Samsung Galaxy S24', 'Samsung', 1420000, 9, 'https://images.unsplash.com/photo-1706525438545-1b32128b6bf1?w=400', NULL, NULL, 256, 6.2, 4000, 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(8,  'celular', 'Motorola Edge 40', 'Motorola', 680000, 15, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', NULL, NULL, 256, 6.55, 4400, 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(9,  'celular', 'Xiaomi Redmi Note 13', 'Xiaomi', 380000, 20, 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400', NULL, NULL, 128, 6.67, 5000, 108, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(10, 'celular', 'Google Pixel 8', 'Google', 1100000, 7, 'https://images.unsplash.com/photo-1667372283596-2e5b2d9a1e6e?w=400', NULL, NULL, 128, 6.2, 4575, 50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),

-- ── Auriculares ───────────────────────────────────────────────
(11, 'auricular', 'Sony WH-1000XM5', 'Sony', 420000, 11, 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400', NULL, NULL, NULL, NULL, NULL, NULL, 'over-ear', TRUE, TRUE, NULL, NULL, NULL, NULL, NULL, NULL),
(12, 'auricular', 'AirPods Pro 2', 'Apple', 580000, 14, 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400', NULL, NULL, NULL, NULL, NULL, NULL, 'in-ear', TRUE, TRUE, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 'auricular', 'HyperX Cloud II', 'HyperX', 185000, 9, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', NULL, NULL, NULL, NULL, NULL, NULL, 'over-ear', FALSE, FALSE, NULL, NULL, NULL, NULL, NULL, NULL),
(14, 'auricular', 'Samsung Galaxy Buds 2 Pro', 'Samsung', 290000, 13, 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400', NULL, NULL, NULL, NULL, NULL, NULL, 'in-ear', TRUE, TRUE, NULL, NULL, NULL, NULL, NULL, NULL),
(15, 'auricular', 'Audio-Technica ATH-M50x', 'Audio-Technica', 210000, 0, 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400', NULL, NULL, NULL, NULL, NULL, NULL, 'over-ear', FALSE, FALSE, NULL, NULL, NULL, NULL, NULL, NULL),

-- ── Monitores ─────────────────────────────────────────────────
(16, 'monitor', 'LG UltraGear 27GP850', 'LG', 480000, 6, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 27, '1440p', 'IPS', 165, NULL, NULL),
(17, 'monitor', 'Samsung Odyssey G5', 'Samsung', 390000, 8, 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 32, '1440p', 'VA', 144, NULL, NULL),
(18, 'monitor', 'AOC 24G2', 'AOC', 195000, 15, 'https://images.unsplash.com/photo-1547119957-637f8679db1e?w=400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 24, '1080p', 'IPS', 144, NULL, NULL),
(19, 'monitor', 'Dell UltraSharp U2722D', 'Dell', 540000, 5, 'https://images.unsplash.com/photo-1524429656589-6633a470097c?w=400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 27, '1440p', 'IPS', 60, NULL, NULL),
(20, 'monitor', 'ASUS ROG Swift PG279QM', 'ASUS', 780000, 3, 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 27, '1440p', 'IPS', 240, NULL, NULL),

-- ── PCs de escritorio ─────────────────────────────────────────
(21, 'pc_escritorio', 'PC Gamer Entry Level', 'Armada', 1200000, 5, 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400', 'AMD Ryzen 5 5600G', 16, 512, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'RX 6600', 550),
(22, 'pc_escritorio', 'PC Workstation Creativa', 'Armada', 2400000, 3, 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400', 'Intel Core i9-13900K', 64, 2048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'RTX 4070', 850),
(23, 'pc_escritorio', 'PC Ofimática Básica', 'Armada', 520000, 10, 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=400', 'Intel Core i3-12100', 8, 256, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Integrada UHD 730', 400),
(24, 'pc_escritorio', 'PC Gamer High End', 'Armada', 3800000, 2, 'https://images.unsplash.com/photo-1612690669207-fed642192c40?w=400', 'AMD Ryzen 9 7950X', 64, 2048, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'RTX 4090', 1000),
(25, 'pc_escritorio', 'PC Gamer Mid Range', 'Armada', 1750000, 6, 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400', 'AMD Ryzen 7 7700X', 32, 1024, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'RTX 4060 Ti', 650);

ALTER TABLE producto ALTER COLUMN id RESTART WITH (SELECT MAX(id) + 1 FROM producto);