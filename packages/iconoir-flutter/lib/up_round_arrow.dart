import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class UpRoundArrow extends StatelessWidget {
  const UpRoundArrow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/UpRoundArrow.svg');
}
