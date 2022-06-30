import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pinterest extends StatelessWidget {
  const Pinterest({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Pinterest.svg');
}
