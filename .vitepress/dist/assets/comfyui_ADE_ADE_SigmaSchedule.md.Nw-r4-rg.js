import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.DpC1ZpOZ.js";const u=JSON.parse('{"title":"Create Sigma Schedule 🎭🅐🅓","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_SigmaSchedule.md","filePath":"comfyui/ADE/ADE_SigmaSchedule.md"}'),l={name:"comfyui/ADE/ADE_SigmaSchedule.md"},t=e(`<h1 id="create-sigma-schedule-🎭🅐🅓" tabindex="-1">Create Sigma Schedule 🎭🅐🅓 <a class="header-anchor" href="#create-sigma-schedule-🎭🅐🅓" aria-label="Permalink to &quot;Create Sigma Schedule 🎭🅐🅓&quot;">​</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><ul><li>Class name: ADE_SigmaSchedule</li><li>Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>ADE_SigmaSchedule节点旨在根据给定的beta计划生成一个sigma计划。它抽象了sigma计划创建的复杂性，提供了一种简便的方法来获得符合特定模型采样类型和配置的sigma计划。</p><h2 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><ul><li>beta_schedule <ul><li>指定用于生成sigma计划的beta计划。此参数至关重要，因为它决定了将派生sigma计划的基本配置。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: BetaSchedules.ALIAS_ACTIVE_LIST</li></ul></li></ul><h2 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h2><ul><li>sigma_schedule <ul><li>Comfy dtype: SIGMA_SCHEDULE</li><li>输出一个sigma计划对象，它对于定义基于扩散的生成模型中的噪声级别进程至关重要。</li><li>Python dtype: SigmaSchedule (custom type from the animatediff package)</li></ul></li></ul><h2 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h2><ul><li>Infra type: CPU</li><li>Common nodes: unknown</li></ul><h2 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SigmaScheduleNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INPUT_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;beta_schedule&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (BetaSchedules.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ALIAS_ACTIVE_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_TYPES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SIGMA_SCHEDULE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Animate Diff 🎭🅐🅓/sample settings/sigma schedule&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FUNCTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;get_sigma_schedule&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> get_sigma_schedule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self, beta_schedule: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        model_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ModelSamplingType.from_alias(ModelSamplingType.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">EPS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        new_model_sampling </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BetaSchedules._to_model_sampling(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">alias</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">beta_schedule,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">                                                              model_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model_type)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (SigmaSchedule(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model_sampling</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">new_model_sampling, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model_type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">model_type),)</span></span></code></pre></div>`,13),n=[t];function h(p,k,d,r,o,E){return a(),i("div",null,n)}const c=s(l,[["render",h]]);export{u as __pageData,c as default};