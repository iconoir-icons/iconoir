import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FrameSimple extends StatelessWidget {
  const FrameSimple({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/FrameSimple.svg');
}
