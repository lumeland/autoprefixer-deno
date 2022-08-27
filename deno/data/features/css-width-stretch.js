/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-width-stretch) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var i = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var n = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !c.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(o = A(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  t,
) => (t = C != null ? s(u(C)) : {},
  n(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var a = i((I, d) => {
  d.exports = {
    A: {
      D: {
        2: "I n J D E F A B C K L G M N O o p q",
        33:
          "0 1 2 3 4 5 6 7 8 9 r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      L: { 33: "H" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        2: "0B",
        33:
          "0 1 2 3 4 5 6 7 8 9 mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      M: { 33: "a" },
      A: { 2: "J D E F A B zB" },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      K: { 2: "A B C jB xB kB", 33: "b" },
      E: {
        2: "I n J 4B sB 5B 6B DC",
        33: "D E F A B C K L G 7B 8B tB jB kB 9B AC BC uB vB wB CC lB",
      },
      G: {
        2: "sB JC yB KC LC",
        33: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      P: { 2: "I", 33: "lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      I: { 2: "mB I eC fC gC hC yB", 33: "H iC jC" },
    },
    B: 6,
    C: "width: stretch property",
  };
});
var p = E(a()),
  { A: h, B: m, C: D } = p,
  { default: f, ...F } = p,
  H = f !== void 0 ? f : F;
export { D as C, H as default, h as A, m as B };
