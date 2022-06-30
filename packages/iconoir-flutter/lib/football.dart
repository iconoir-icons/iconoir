import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Football extends StatelessWidget {
  const Football({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Football.svg');
}
