def c(min_vw, max_vw, min_val, max_val):
    if min_val == max_val: return f"{min_val / 16}rem"
    slope = (max_val - min_val) / (max_vw - min_vw)
    y_int = min_val - slope * min_vw
    s_vw = slope * 100
    y_r = y_int / 16
    min_r = min_val / 16
    max_r = max_val / 16
    if min_val < max_val: return f"clamp({min_r:.4f}rem, {y_r:.4f}rem + {s_vw:.4f}vw, {max_r:.4f}rem)"
    else: return f"clamp({max_r:.4f}rem, {y_r:.4f}rem + {s_vw:.4f}vw, {min_r:.4f}rem)"

print("--- A (1208-1440) ---")
print("W:", c(1208, 1440, 231, 350))
print("H:", c(1208, 1440, 170, 235))
print("Pad:", c(1208, 1440, 20, 25))
print("Lbl:", c(1208, 1440, 10, 12))
print("ValAmt:", c(1208, 1440, 16, 28))
print("ValND:", c(1208, 1440, 13, 15))
print("Num:", c(1208, 1440, 15, 22))

print("--- B (375-1208) ---")
print("W:", c(375, 1208, 265, 231))
print("H:", c(375, 1208, 170, 170))
print("Pad:", c(375, 1208, 20, 20))
print("Lbl:", c(375, 1208, 11, 10))
print("ValAmt:", c(375, 1208, 16, 16))
print("ValND:", c(375, 1208, 13, 13))
print("Num:", c(375, 1208, 15, 15))
