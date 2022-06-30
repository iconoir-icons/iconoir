import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PhonePaused extends StatelessWidget {
  const PhonePaused({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PhonePaused.svg');
}
