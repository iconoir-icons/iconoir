import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EnlargeRoundArrow extends StatelessWidget {
  const EnlargeRoundArrow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/EnlargeRoundArrow.svg');
}
