import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DogecoinCircleSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const DogecoinCircleSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16.5978 8.73244C17.024 9.57651 17.25 10.6507 17.25 12.0001C17.25 13.3494 17.024 14.4236 16.5978 15.2677C16.1658 16.1232 15.5474 16.7031 14.8368 17.0824C13.4959 17.798 11.8488 17.7742 10.6529 17.7569L10.5885 17.756C9.85321 17.7455 9.25 17.1495 9.25 16.4021L9.25001 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H9.25001L9.25002 7.59837C9.25001 6.85092 9.85321 6.25487 10.5885 6.24438L10.6531 6.24345C11.8489 6.22614 13.496 6.2023 14.8368 6.91783C15.5474 7.29708 16.1658 7.87703 16.5978 8.73244ZM10.75 11.25L10.75 7.74233C11.9916 7.72661 13.2028 7.7461 14.1306 8.24118C14.5838 8.48304 14.9736 8.8438 15.2588 9.40861C15.5498 9.98476 15.75 10.8103 15.75 12.0001C15.75 13.1899 15.5498 14.0154 15.2588 14.5916C14.9736 15.1564 14.5837 15.5172 14.1305 15.7591C13.2028 16.2542 11.9916 16.2738 10.75 16.2581L10.75 12.75H12C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25H10.75Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}