import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class VideoCameraOff extends StatelessWidget {
  const VideoCameraOff({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/VideoCameraOff.svg');
}
