/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-autofill) es2022 production */
var u = Object.create;
var a = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var A = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of A(B)) {
      !c.call(C, t) && t !== e && a(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  e,
) => (e = C != null ? u(p(C)) : {},
  n(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var s = i((I, l) => {
  l.exports = {
    A: {
      D: {
        1: "h i j k l a m H qB rB 3B",
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g",
      },
      L: { 1: "H" },
      B: {
        1: "h i j k l a m H",
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g",
      },
      C: {
        1: "V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U 1B 2B",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B zB" },
      F: {
        1: "pB S T U V W X Y Z",
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R",
      },
      K: { 2: "A B C jB xB kB", 33: "b" },
      E: {
        1: "G BC uB vB wB CC lB",
        2: "DC",
        33: "I n J D E F A B C K L 4B sB 5B 6B 7B 8B tB jB kB 9B AC",
      },
      G: {
        1: "cC uB vB wB lB",
        33: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC",
      },
      P: { 33: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB", 33: "iC jC" },
    },
    B: 6,
    C: ":autofill CSS pseudo-class",
  };
});
var f = E(s()),
  { A: S, B: m, C: D } = f,
  { default: d, ...F } = f,
  H = d !== void 0 ? d : F;
export { D as C, H as default, m as B, S as A };
