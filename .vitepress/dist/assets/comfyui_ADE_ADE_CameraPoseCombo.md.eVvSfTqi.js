import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.DpC1ZpOZ.js";const g=JSON.parse('{"title":"Create CameraCtrl Poses (Combo) 🎭🅐🅓②","description":"","frontmatter":{},"headers":[],"relativePath":"comfyui/ADE/ADE_CameraPoseCombo.md","filePath":"comfyui/ADE/ADE_CameraPoseCombo.md"}'),n={name:"comfyui/ADE/ADE_CameraPoseCombo.md"},l=t(`<h1 id="create-cameractrl-poses-combo-🎭🅐🅓2" tabindex="-1">Create CameraCtrl Poses (Combo) 🎭🅐🅓② <a class="header-anchor" href="#create-cameractrl-poses-combo-🎭🅐🅓2" aria-label="Permalink to &quot;Create CameraCtrl Poses (Combo) 🎭🅐🅓②&quot;">​</a></h1><h2 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h2><ul><li>Class name: ADE_CameraPoseCombo</li><li>Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses</li><li>Output node: False</li><li>Repo Ref: <a href="https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git" target="_blank" rel="noreferrer">https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git</a></li></ul><p>ADE_CameraPoseCombo节点旨在通过组合多种运动类型及其相应的强度来创建复杂的摄像机控制姿势。它允许在动画序列中自定义摄像机运动，从而生成动态且细致的摄像机行为。</p><h2 id="input-types" tabindex="-1">Input types <a class="header-anchor" href="#input-types" aria-label="Permalink to &quot;Input types&quot;">​</a></h2><h3 id="required" tabindex="-1">Required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;Required&quot;">​</a></h3><ul><li>motion_type1 <ul><li>指定要包含在组合中的第一种摄像机运动类型。每种运动类型都对整体摄像机运动模式有所贡献。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>motion_type2 <ul><li>指定要包含在组合中的第二种摄像机运动类型，增加摄像机运动的复杂性。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>motion_type3 <ul><li>指定第三种摄像机运动类型，进一步丰富摄像机的运动模式。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>motion_type4 <ul><li>指定第四种摄像机运动类型，对摄像机运动的多样性有所贡献。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>motion_type5 <ul><li>指定第五种摄像机运动类型，为摄像机运动的复杂性增加另一层。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>motion_type6 <ul><li>指定第六种摄像机运动类型，完成综合摄像机控制的运动集。</li><li>Comfy dtype: COMBO[STRING]</li><li>Python dtype: str</li></ul></li><li>speed <ul><li>控制摄像机运动的速度，影响摄像机在姿势之间过渡的快慢。</li><li>Comfy dtype: FLOAT</li><li>Python dtype: float</li></ul></li><li>frame_length <ul><li>确定摄像机运动发生的帧数，定义动画的持续时间。</li><li>Comfy dtype: INT</li><li>Python dtype: int</li></ul></li></ul><h3 id="optional" tabindex="-1">Optional <a class="header-anchor" href="#optional" aria-label="Permalink to &quot;Optional&quot;">​</a></h3><ul><li>prev_poses <ul><li>可选。可以与新运动结合的先前摄像机姿势，以实现动画中的无缝过渡。此输入对于创建流畅且连续的摄像机运动至关重要，尤其是在需要保持叙述或视觉连续性的场景中。</li><li>Comfy dtype: CAMERACTRL_POSES</li><li>Python dtype: list[list[float]]</li></ul></li></ul><h2 id="output-types" tabindex="-1">Output types <a class="header-anchor" href="#output-types" aria-label="Permalink to &quot;Output types&quot;">​</a></h2><ul><li>cameractrl_poses <ul><li>Comfy dtype: CAMERACTRL_POSES</li><li>组合指定的运动和强度后生成的摄像机控制姿势，准备用于动画。</li><li>Python dtype: list[list[float]]</li></ul></li></ul><h2 id="usage-tips" tabindex="-1">Usage tips <a class="header-anchor" href="#usage-tips" aria-label="Permalink to &quot;Usage tips&quot;">​</a></h2><ul><li>Infra type: CPU</li><li>Common nodes: unknown</li></ul><h2 id="source-code" tabindex="-1">Source code <a class="header-anchor" href="#source-code" aria-label="Permalink to &quot;Source code&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CameraCtrlPoseCombo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">classmethod</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INPUT_TYPES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cls):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;required&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type5&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;motion_type6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">_LIST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FLOAT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;min&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;step&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.01</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;frame_length&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;INT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;optional&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;prev_poses&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CAMERACTRL_POSES&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    RETURN_TYPES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;CAMERACTRL_POSES&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FUNCTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;camera_pose_combo&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    CATEGORY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Animate Diff 🎭🅐🅓/② Gen2 nodes ②/CameraCtrl/poses&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> camera_pose_combo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(self,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                          motion_type1: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, motion_type2: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, motion_type3: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                          motion_type4: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, motion_type5: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, motion_type6: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                          speed: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, frame_length: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                          prev_poses: list[list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                          strength1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strength2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strength3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strength4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strength5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, strength6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        combined_motion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CameraMotion.combine([</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type1).multiply(strength1), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type2).multiply(strength2), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type3).multiply(strength3),</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type4).multiply(strength4), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type5).multiply(strength5), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CAM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.get(motion_type6).multiply(strength6)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            ])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        RT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_camera_motion(combined_motion.rotate, combined_motion.translate, speed, frame_length)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        new_motion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ndarray_to_poses(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">RT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">RT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prev_poses </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">is</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> not</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            new_motion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> combine_poses(prev_poses, new_motion)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (new_motion,)</span></span></code></pre></div>`,15),h=[l];function p(k,e,E,r,o,d){return a(),i("div",null,h)}const C=s(n,[["render",p]]);export{g as __pageData,C as default};