import React, { useState } from 'react';
import { Button } from '@components/controls/Button.tsx';
import { Badge } from '@components/common/Badge.tsx';
import { ToggleSwitch } from '@components/controls/ToggleSwitch.tsx';
import { RangeSlider } from '@components/controls/RangeSlider.tsx';
import { Input, Select, Textarea, Label } from '@components/controls/FormControls.tsx';
import { StandardRadio } from '@components/controls/RadioKit/StandardRadio.tsx';
import { SegmentedControl } from '@components/controls/RadioKit/SegmentedControl.tsx';
import { RadioCardGroup } from '@components/controls/RadioKit/RadioCardGroup.tsx';
import { ChamferFrame } from '@components/common/ChamferFrame.tsx';
import { CodePreview } from '@components/common/CodePreview.tsx';

export interface ControlsSectionProps {
  onOpenModal: () => void;
}

export const ControlsSection: React.FC<ControlsSectionProps> = ({ onOpenModal }) => {
  // Interactive UI States
  const [stylisticSet, setStylisticSet] = useState(true);
  const [losslessAudio, setLosslessAudio] = useState(false);
  const [monitorVolume, setMonitorVolume] = useState(78);
  const [callsign, setCallsign] = useState('operator@bkvn.dev');
  const [assetFormat, setAssetFormat] = useState('ESP32 CAD PACKAGE (ZIP)');
  const [remarks, setRemarks] = useState(
    'Albatross brand mark font paired with HS Luna Obscura display headlines.'
  );

  // Radio Kit States
  const [telemetryFreq, setTelemetryFreq] = useState('continuous');
  const [formatSpec, setFormatSpec] = useState('otf');
  const [licenseProfile, setLicenseProfile] = useState('operator');

  // Code inspection toggle
  const [showCodeInspector, setShowCodeInspector] = useState(false);

  return (
    <section id="elements" className="content-block">
      <div className="editorial-grid">
        <div>
          <span className="section-label">
            03. UI COMPONENTS <span className="accent-red">[HARDWARE KIT]</span>
          </span>
          <h2>Interface Kit Controls</h2>
          <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
            Tactical UI controls, inputs, indicators, badges, and modal dialogs proportioned for dark
            editorial sites.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowCodeInspector(!showCodeInspector)}
            style={{ marginTop: '0.5rem' }}
          >
            {showCodeInspector ? 'HIDE REACT SNIPPETS ▲' : 'VIEW REACT SNIPPETS ▼'}
          </Button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {/* 1. Action Buttons */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--bkvn-text-muted)',
                marginBottom: '0.75rem',
              }}
            >
              ACTION BUTTON VARIANTS <span className="accent-red">[PRIMARY, SECONDARY, DANGER &amp; GHOST]</span>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.85rem',
                flexWrap: 'wrap',
                alignItems: 'center',
                marginBottom: '0.85rem',
              }}
            >
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="danger">Danger Action</Button>
              <Button variant="ghost" onClick={onOpenModal}>
                [ Ghost Action ]
              </Button>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" size="sm">
                Small Primary
              </Button>
              <Button variant="secondary" size="sm">
                Small Slate
              </Button>
              <Button variant="danger" size="sm">
                Small Danger
              </Button>
              <Button variant="primary" size="lg">
                Large Tactical Action
              </Button>
            </div>

            {showCodeInspector && (
              <CodePreview
                jsxCode={`<Button variant="primary">Primary Action</Button>\n<Button variant="secondary" size="sm">Small Slate</Button>\n<Button variant="danger">Danger Action</Button>\n<Button variant="ghost" onClick={onOpenModal}>[ Ghost Action ]</Button>`}
                htmlCode={`<button class="btn btn-primary">Primary Action</button>\n<button class="btn btn-secondary btn-sm">Small Slate</button>\n<button class="btn btn-danger">Danger Action</button>\n<button class="btn btn-ghost">[ Ghost Action ]</button>`}
              />
            )}
          </div>

          {/* 2. Form Controls & Dropdowns */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--bkvn-text-muted)',
                marginBottom: '0.75rem',
              }}
            >
              FORM FIELDS &amp; SELECTION DROPDOWNS
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
                marginBottom: '1rem',
              }}
            >
              <div>
                <Label>SUBSCRIBER CALLSIGN</Label>
                <Input
                  type="text"
                  value={callsign}
                  onChange={(e) => setCallsign(e.target.value)}
                />
              </div>

              <div>
                <Label>ASSET FORMAT</Label>
                <Select value={assetFormat} onChange={setAssetFormat}>
                  <option value="ESP32 CAD PACKAGE (ZIP)">ESP32 CAD PACKAGE (ZIP)</option>
                  <option value="OTF TYPEFACE LICENSE">OTF TYPEFACE LICENSE</option>
                  <option value="WOFF2 WEB FONT">WOFF2 WEB FONT</option>
                  <option value="VOID-FM FLAC STREAM">VOID-FM FLAC STREAM</option>
                </Select>
              </div>
            </div>

            <div>
              <Label>SPECIMEN REMARKS</Label>
              <Textarea
                rows={2}
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Enter remarks..."
              />
            </div>
          </div>

          {/* 3. Toggles & Sliders */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--bkvn-text-muted)',
                marginBottom: '0.75rem',
              }}
            >
              TOGGLES &amp; SLIDERS
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <ToggleSwitch
                checked={stylisticSet}
                onChange={setStylisticSet}
                label="Automatic Stylistic Set 01 (ss01) Enabled"
              />

              <ToggleSwitch
                checked={losslessAudio}
                onChange={setLosslessAudio}
                label="Lossless Audio Previews"
              />

              <RangeSlider
                label="MONITOR VOLUME"
                value={monitorVolume}
                min={0}
                max={100}
                onChange={setMonitorVolume}
              />
            </div>
          </div>

          {/* 4. Radio Button UI Kit */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--bkvn-text-muted)',
                marginBottom: '0.75rem',
              }}
            >
              RADIO BUTTON KIT <span className="accent-red">[STANDARD, SEGMENTED &amp; CARD SELECTORS]</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
                marginBottom: '1.25rem',
              }}
            >
              {/* Standard Radio Options */}
              <div>
                <Label style={{ marginBottom: '0.5rem' }}>TELEMETRY FREQUENCY MODE</Label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <StandardRadio
                    name="telemetry-freq"
                    value="continuous"
                    checked={telemetryFreq === 'continuous'}
                    onChange={(e) => setTelemetryFreq(e.target.value)}
                    label="Continuous Stream (Real-Time)"
                  />
                  <StandardRadio
                    name="telemetry-freq"
                    value="burst"
                    checked={telemetryFreq === 'burst'}
                    onChange={(e) => setTelemetryFreq(e.target.value)}
                    label="Burst Pulse (Interval 500ms)"
                  />
                  <StandardRadio
                    name="telemetry-freq"
                    value="quantum"
                    disabled
                    label={<span style={{ opacity: 0.5 }}>Quantum Encrypted Mode [OFFLINE]</span>}
                  />
                </div>
              </div>

              {/* Segmented Radio Bar */}
              <div>
                <Label style={{ marginBottom: '0.5rem' }}>TYPEFACE FORMAT SPEC</Label>
                <SegmentedControl
                  name="format-spec"
                  value={formatSpec}
                  onChange={setFormatSpec}
                  options={[
                    { value: 'otf', label: '.OTF FULL' },
                    { value: 'woff2', label: '.WOFF2 WEB' },
                    { value: 'variable', label: '.VF SPEC' },
                  ]}
                />
              </div>
            </div>

            {/* Radio Card Group */}
            <div>
              <Label style={{ marginBottom: '0.5rem' }}>DEPLOYMENT LICENSE PROFILE</Label>
              <RadioCardGroup
                name="license-profile"
                value={licenseProfile}
                onChange={setLicenseProfile}
                options={[
                  {
                    value: 'operator',
                    title: 'OPERATOR SUITE',
                    badge: 'SINGLE KEY',
                    badgeVariant: 'red',
                    description:
                      'Personal workstation license for non-commercial specimen & editorial design deployments.',
                  },
                  {
                    value: 'commander',
                    title: 'COMMANDER KITS',
                    badge: 'UNLIMITED',
                    badgeVariant: 'default',
                    description:
                      'Commercial studio license with full source OTF specs, broadcast clearance, and CAD packages.',
                  },
                ]}
              />
            </div>

            {showCodeInspector && (
              <CodePreview
                jsxCode={`<RadioCardGroup\n  name="license-profile"\n  value={licenseProfile}\n  onChange={setLicenseProfile}\n  options={[\n    { value: 'operator', title: 'OPERATOR SUITE', badge: 'SINGLE KEY', badgeVariant: 'red', description: 'Personal license.' },\n    { value: 'commander', title: 'COMMANDER KITS', badge: 'UNLIMITED', description: 'Commercial studio license.' }\n  ]}\n/>`}
              />
            )}
          </div>

          {/* 5. Badges, Tags & Hardware Cards */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--bkvn-text-muted)',
                marginBottom: '0.75rem',
              }}
            >
              BADGES &amp; HARDWARE CARDS
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <Badge>AVAILABLE</Badge>
              <Badge variant="red">[OFL LICENSE]</Badge>
              <Badge>KIT-02 RELEASE</Badge>
              <Badge variant="red">[ACTIVE SET 01]</Badge>
            </div>

            <ChamferFrame cut="md" style={{ padding: '1.35rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: '#ffffff',
                  }}
                >
                  HS Luna Obscura Package
                </div>
                <Badge variant="red">[OTF + WOFF2]</Badge>
              </div>
              <p style={{ fontSize: '0.8125rem', marginBottom: '1rem' }}>
                Complete hardware font package with OpenType stylistic sets, cyrillic support, and
                SIL Open Font License.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Button
                  variant="primary"
                  as="a"
                  href="/hs_lunaobscura_v1.0/HS_LunaObscura.otf"
                  download
                >
                  Download OTF
                </Button>
                <Button variant="secondary" onClick={onOpenModal}>
                  View Details
                </Button>
              </div>
            </ChamferFrame>
          </div>
        </div>
      </div>
    </section>
  );
};
