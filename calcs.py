import math

a = -4.51249
b = -0.25371
tx = 1050003.715
ty = 50542.131

def vx(x: float, y: float, tx: float, X: float) -> float:
    return a*x - b*y + tx - X

def vy(x: float, y: float, ty: float, Y: float) -> float:
    return b*x + a*y + ty - Y

class Cordinate:
    def __init__(self, x: float, y: float) -> None:
        self.x = x
        self.y = y

    def __str__(self) -> str:
        return f"({self.x}, {self.y})"

cordinates = [
    (Cordinate(1049422.40, 51089.20), Cordinate(121.622,-128.066)), 
    (Cordinate(1049413.95, 49659.30), Cordinate(141.228,187.718)),
    (Cordinate(1049244.95, 49884.95), Cordinate(175.802,135.728)),
    ]

for coord in cordinates:
    v_x = vx(coord[1].x, coord[1].y, tx, coord[0].x)
    v_y = vy(coord[1].x, coord[1].y, ty, coord[0].y)
    # print(coord[0])
    print(f"({v_x}, {v_y})")

angle = math.atan(b / a)

print(f"angle = {angle}")

def scale(a: float, angle: float):
    print(a / math.cos(angle))

def deg_min_sec(radians: float):
    decimal_deg = (180.0 / math.pi) * radians 
    degree = math.floor(decimal_deg)

    decimal_mins = (decimal_deg - degree) * 60.0
    mins = math.floor(decimal_mins)

    decimal_sec = (decimal_mins - mins) * 60.0
    sec = round(decimal_sec)
    print(f"{degree}.{mins}.{sec}")

deg_min_sec(angle)
scale(a, angle)