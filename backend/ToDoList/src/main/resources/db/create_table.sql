CREATE TABLE member (
                        m_id INT PRIMARY KEY,
                        m_email VARCHAR(30) UNIQUE NOT NULL,
                        m_pwd VARCHAR(60) NOT NULL,
                        m_name VARCHAR(11) NOT NULL
);

CREATE TABLE category (
                          c_id INT PRIMARY KEY,
                          c_name VARCHAR(20),
                          m_id INT
);

CREATE TABLE section (
                         s_id INT PRIMARY KEY,
                         s_count INT,
                         s_name VARCHAR(20) NOT NULL,
                         c_id INT
);

CREATE TABLE task (
                      t_id INT PRIMARY KEY,
                      t_title VARCHAR(40) NOT NULL,
                      t_content TEXT,
                      t_deadline DATETIME DEFAULT NOW(),
                      t_order INT NOT NULL,
                      t_image VARCHAR(200),
                      p_id INT,
                      s_id INT,
                      f_id INT
);

CREATE TABLE favority (
                          f_id INT PRIMARY KEY,
                          f_name VARCHAR(11) NOT NULL
);

CREATE TABLE reply (
                       r_id INT PRIMARY KEY,
                       m_id INT,
                       t_id INT,
                       r_content VARCHAR(1000),
                       r_date DATETIME DEFAULT NOW()
);

CREATE TABLE priority (
                          p_id INT PRIMARY KEY,
                          p_name VARCHAR(11) NOT NULL
);
