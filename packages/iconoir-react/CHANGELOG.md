# Changelog
All notable changes to the [iconoir-react](https://www.npmjs.com/package/iconoir-react)
npm package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2021-07-05
### Added
- Support webpack tree shaking - Thanks @barnabasJ!

### Changed
- Updated `iconoir-react` to use iconoir `v4.4.0`.
- Update dependencies.

## [2.0.0] - 2021-06-01
A massive thank you to [@paescuj](https://github.com/paescuj) for making all of the changes
for this update.

### Added
- All default SVG properties are now valid component props.

### Changed
- Updated `iconoir-react` to use iconoir `v4.3.1`.
- `Cell4x4` component changed to `Cell4X4`.
- `Display4k` component changed to `Display4K`.
- `Medal1st` component changed to `Medal1St`.

### Removed
- `size` prop has been removed. Instead, the `height` and `width` props should be used
to fit in line with native SVG properties.
- `Icon` type has been removed due to type autogeneration from using `tsup`.
- `IconProps` type has been removed due to type autogeneration from using `tsup`.

## [1.1.0] - 2021-05-22
### Changed
- Updated `iconoir-react` to use iconoir `v4.3.0`.

## [1.0.0] - 2021-05-19
### Added
- Initial release of `iconoir-react` to npm. Based on iconoir `v4.2.2`.
