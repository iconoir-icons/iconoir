import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Wristwatch extends StatelessWidget {
  const Wristwatch({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Wristwatch.svg');
}
