<!-- 设置detail模块的背景色 -->
<style>
.my-details {
  border: 1px solid #03172a;
  border-radius: 5px;
  padding: 1.0em;
  margin: 1em 0;

  font-weight: bold;

  background-color:	#FFEFD5;
  margin-top: 0.5em;
}
</style>

Notes for *Statistical Physics of Spin Glasses and Information Processing: An Introduction - Nishimori - 2001*

# Chapter 3: Replica Symmetry Breaking
在此部分依然考虑SK model。上一部分中使用replica symmetry 假设，得到的结果在低温下出现了negative entropy的问题。为了解决这个问题，考虑order parameters $q_{\alpha\beta}$ 和 $m_{\alpha}$ 可能依赖于replica index 的标号，即考虑**replica symmetry breaking**的情况。虽然一开始这种方法是为了避免negative entropy 问题，但是后来发现 replica symmetry breaking 反应了：phase space 中存在大量具有ultrametric结构的stable states。

## Sec. 1: Stability of replica-symmetric solution
在此将从stability 的角度分析replica-symmetric solution 的问题。replica-symmetric solution 的可靠性的一个必要条件是：free energy 在该解附近对于一个infinitesimal deviations 是stable。为了验证，计算式(PF-Zn)，
$$
\begin{aligned}
[Z^n] =&\exp\left(\frac{\beta^2 J^2nN}{4}\right) \int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}q_{\alpha\beta}^2-\frac{N\beta J_0 }{2}\sum_{\alpha}m_{\alpha}^2 + N\log \text{Tr} \text{ e}^L\right)\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m_{\alpha} +h)S^{\alpha}.\\
\end{aligned}   
$$
中指数项中围绕replica-symmetric solution 的偏离量 $\delta q_{\alpha\beta} = q_{\alpha\beta} - q$ 和 $\delta m_{\alpha} = m_{\alpha} - m$ 的二次项系数矩阵的本征值是否均为正，即
$$
[Z^n] =\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left[-N\beta\left(f_{RS}+\left(\text{quadratic in } \delta q_{\alpha\beta} \text{ and } \delta m_{\alpha}\right)\right)\right]
$$
其中$f_{RS}$为replica-symmetric free energy (RS-FE). 
<details class="my-details">
<summary> 解释</summary>

$$
\begin{aligned}
[Z^n]&= \exp\left(\frac{\beta^2 J^2nN}{4}\right) \int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(q+\delta q_{\alpha\beta})^2-\frac{N\beta J_0 }{2}\sum_{\alpha}(m + \delta m_{\alpha})^2 + N\log \text{Tr} \text{ e}^{L_{\alpha\beta}}\right)\\
其中\quad L_{\alpha\beta} &= \beta^2 J^2  \sum_{\alpha<\beta}(q+\delta q_{\alpha\beta})S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 (m + \delta m_{\alpha}) +h)S^{\alpha}.\\
\end{aligned}
$$
所以
$$
\begin{aligned}
[Z^n]&= \exp\left(\frac{\beta^2 J^2nN}{4}\right)\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}q^2-\frac{N\beta J_0 }{2}\sum_{\alpha}m^2 + N\log \text{Tr} \text{ e}^{L}\right)\\
&\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left( N\log \text{Tr} \text{ e}^{\delta L}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(2q\delta q_{\alpha\beta}+\delta q_{\alpha\beta}^2)-\frac{N\beta J_0 }{2}\sum_{\alpha}(2m\delta m_{\alpha}+\delta m_{\alpha}^2)\right)\\
其中\quad L &= \beta^2 J^2  \sum_{\alpha<\beta}qS^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}(J_0 m  +h)S^{\alpha},\\
\quad \delta L &= \beta^2 J^2  \sum_{\alpha<\beta}\delta q_{\alpha\beta}S^{\alpha} S^{\beta}+ \beta  \sum_{\alpha}J_0 \delta m_{\alpha}S^{\alpha}.\\
所以\\
[Z^n]&=\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\exp\left[-N\beta\left(f_{RS}\right)\right]\exp\left( \underline{N\log \text{Tr} \text{ e}^{\delta L}}\right)\\
&\exp\left(-\frac{N\beta^2 J^2 }{2}\sum_{\alpha<\beta}(2q\delta q_{\alpha\beta}+\delta q_{\alpha\beta}^2)-\frac{N\beta J_0 }{2}\sum_{\alpha}(2m\delta m_{\alpha}+\delta m_{\alpha}^2)\right)\\
&画线部分对\delta q_{\alpha\beta}和 \delta m_{\alpha}做二阶展开，与后面项合并，整体可以写为\\
&\text{quadratic in }\delta q_{\alpha\beta} \text{ and }\delta m_{\alpha}\\
&=\int_{-\infty}^{\infty}\left(\prod_{\alpha<\beta}\text{d}q_{\alpha\beta}\right)\left(\prod_{\alpha}\text{d}m_{\alpha}\right)\\
&\exp\left[-N\beta\left(f_{RS}+\left(\text{quadratic in } \delta q_{\alpha\beta} \text{ and } \delta m_{\alpha}\right)\right)\right]
\end{aligned}
$$

</details>

上面积分在$N\to \infty$时，不应该发散，因此需要保证该二次项系数矩阵必须是正定的（或至少是半正定的）。本节证明，在phase diagram 区域低于某条线（称之为AT line），该矩阵存在负的本征值，因此replica-symmetric solution 在该区域是不稳定的。此后的章节将讨论在该区域具有replica symmetry breaking的solution的显式形式及其物理意义。
### Hessian matrix
